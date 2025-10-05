# from flask import Flask, request, jsonify, render_template

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/coordinates', methods=['POST'])
# def coordinates():
#     data = request.json
#     x = data.get('x')
#     y = data.get('y')
#     message = f"x is {x} and y is {y}"
#     return jsonify({'message': message})

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/coordinates', methods=['POST'])
def coordinates():
    data = request.get_json()
    lng = data['lng']
    lat = data['lat']
    message = f"x is {lng} and y is {lat}"
    return jsonify({'message': message})

if __name__ == '__main__':
    app.run(debug=True)

