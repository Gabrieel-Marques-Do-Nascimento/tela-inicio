from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    template_dir = os.path.join(os.getcwd(), 'templates')
    print(f"Looking for templates in: {template_dir}")
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)