from flask import Flask, request, redirect, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
import string, random

app = Flask(__name__)

# Database setup (SQLite)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///urls.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Database Model
class URL(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    long_url = db.Column(db.String(500), nullable=False)
    short_code = db.Column(db.String(10), unique=True, nullable=False)

# Create DB
with app.app_context():
    db.create_all()

# Function to generate short code
def generate_code(length=6):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

# Home page (frontend)
@app.route('/')
def home():
    return render_template('index.html')

# API to shorten URL
@app.route('/shorten', methods=['POST'])
def shorten_url():
    data = request.form.get('long_url') or request.json.get('long_url')

    if not data:
        return jsonify({"error": "No URL provided"}), 400

    short_code = generate_code()

    # Save to database
    new_url = URL(long_url=data, short_code=short_code)
    db.session.add(new_url)
    db.session.commit()

    short_url = request.host_url + short_code

    return jsonify({
        "short_url": short_url
    })

# Redirect route
@app.route('/<code>')
def redirect_url(code):
    url = URL.query.filter_by(short_code=code).first()

    if url:
        return redirect(url.long_url)
    else:
        return "URL not found", 404

# Run server
if __name__ == '__main__':
    app.run(debug=True)