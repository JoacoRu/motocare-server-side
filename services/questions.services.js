const QuestionModel = require('../models/questions.model');

class questionsService {
    get(publicationId) {
        return QuestionModel.find().where({'publicationId': publicationId});
    }

    create(payload) {
        let {question, userId,publicationId} = payload;
        payload = {question, userId,publicationId};

        const Question = new QuestionModel(payload);
        return Question.save()
    }

    update(questionId, payload) {
        return QuestionModel.findOneAndUpdate(questionId, payload);
    }

    delete(questionId) {
        return QuestionModel.findOneAndRemove({_id:questionId});
    }
}

module.exports = questionsService;