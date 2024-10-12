from flask import Flask, render_template, request, jsonify, session
import sqlite3

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Conectar ao banco de dados SQLite
def get_db():
    conn = sqlite3.connect('database.db')
    return conn

# Criar tabela para armazenar itens
def create_table():
    with get_db() as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id TEXT,
                name TEXT,
                link TEXT
            )
        ''')

# Rota para a página inicial
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add-item', methods=['POST'])
def add_item():
    if 'user_id' not in session:
        # Exemplo de ID do usuário
        session['user_id'] = 'user123'

    data = request.json
    user_id = session['user_id']
    name = data['name']
    link = data['link']

    with get_db() as conn:
        conn.execute('INSERT INTO items (user_id, name, link) VALUES (?, ?, ?)', (user_id, name, link))
    
    return jsonify({'success': True})

@app.route('/get-items', methods=['GET'])
def get_items():
    if 'user_id' not in session:
        return jsonify({'items': []})

    user_id = session['user_id']

    with get_db() as conn:
        cursor = conn.execute('SELECT name, link FROM items WHERE user_id = ?', (user_id,))
        items = cursor.fetchall()

    return jsonify({'items': items})

if __name__ == '__main__':
    create_table()
    app.run(debug=True)
