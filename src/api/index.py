from flask import Flask, render_template

app = Flask(__name__, static_folder="../static", template_folder="../templates")

@app.route('/')
def homepage():
    return render_template('portfolio.html')

def handler(environ, start_response):
    return app(environ, start_response)


if __name__ == '__main__' :
    app.run(debug=True)
