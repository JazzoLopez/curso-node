const teacherDAO = require('../DAO/teacher.dao');
const teacherController = {}

teacherController.getAll = async (req, res) => {
    teacherDAO.getAll()
        .then(teachers => {
            res.render('../src/views/index_teacher', { teachers });
        })
        .catch(err => {
            res.json({
                status: "Request failed"
            })
        });
}


teacherController.getOne = async (req, res) => {
    teacherDAO.getOne(req.params.employeenumber)
        .then(teacher => {
            if (teacher != null) {
                res.render('../src/views/edit_teacher', { teacher })
            }
            else
                res.json({
                    status: "Not found"
                });
        })
        .catch(err => {
            res.json({ status: "resuest failed" })

        })
}

teacherController.insertOne = async (req, res) => {
    teacherDAO.insertOne(req.body)
        .then(result => {
            res.redirect('/api/teachers/getAll')
        })
        .catch(err => {
            res.json({
                status: "Request failed", message: err
            })
        })
}

teacherController.updateOne = async (req, res) => {
    teacherDAO.updateOne(req.params.employeenumber, req.body)
        .then(result => {
            res.redirect('/api/teachers/getAll')
        })
        .catch(err => {
            res.json({
                status: "Request failed", message: err
            })
        })
}

teacherController.deleteOne = async (req, res) => {
    teacherDAO.deleteOne(req.params.employeenumber)
        .then(result => {
            res.redirect('/api/teachers/getAll')
        })
        .catch(err => {
            res.json({
                status: "request failed", message: err
            })
        });

}
module.exports = teacherController;