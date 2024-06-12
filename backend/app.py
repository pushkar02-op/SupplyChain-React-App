from flask import Flask, jsonify, render_template

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask! This data came from the backend.'}
    return jsonify(data)

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)
