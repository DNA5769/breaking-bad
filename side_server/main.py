import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from keras.preprocessing.text import Tokenizer, tokenizer_from_json
from keras.preprocessing.sequence import pad_sequences

max_len = 256
model = tf.keras.models.load_model('../DL_Model/gibberish_detector')
tokenizer = None
with open('../DL_Model/tokenizer_config.json', 'r') as f:
    tokenizer = tokenizer_from_json(f.read())

def predict_result(text):
    result = model.predict(pad_sequences(tokenizer.texts_to_sequences([text]), maxlen=max_len, padding="post"))
    if (result[0][0] >= result[0][1]):
      return False
    else:
      return True

app = Flask(__name__)
CORS(app)

@app.route('/gibberish')
def check_if_sentence_is_gibberish():
    sentence = request.args.get("sentence")
    print(sentence)
    return jsonify({
        "is_gibberish": predict_result(sentence)
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=81)