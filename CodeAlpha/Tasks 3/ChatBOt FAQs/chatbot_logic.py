from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

questions = [
    "What is your name?",
    "How are you?",
    "What is AI?",
    "What is Python?",
    "How to contact support?"
]

answers = [
    "My name is Chatbot.",
    "I am fine, thank you!",
    "AI means Artificial Intelligence.",
    "Python is a programming language.",
    "You can contact support at support@example.com."
]

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(questions)

def get_response(user_input):
    user_vec = vectorizer.transform([user_input])
    similarity = cosine_similarity(user_vec, X)
    index = similarity.argmax()
    return answers[index]