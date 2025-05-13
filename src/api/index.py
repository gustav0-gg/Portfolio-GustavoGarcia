import os
from flask import Flask, render_template


base_dir = os.path.dirname(os.path.abspath(__file__))

static_folder = os.path.join(base_dir, '..', 'static')
template_folder = os.path.join(base_dir, '..', 'templates')

app = Flask(__name__, static_folder=static_folder, template_folder=template_folder)

@app.route('/')
def homepage():
    return render_template('portfolio.html')

def handler(environ, start_response):
    return app(environ, start_response)

if __name__ == '__main__':
    app.run(debug=True)
