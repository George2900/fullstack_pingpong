from flask import Flask
from flask_cors import CORS

print("__name__ inside app.py =", __name__)

app = Flask(__name__)
CORS(app)

@app.get("/api/ping")
def ping():
    return "pong aboba"

if __name__ == "__main__":
    app.run(debug=True)