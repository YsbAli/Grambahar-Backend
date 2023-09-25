
const post = (model) => async (req, resp) => {
    try {
        const items = await model.create(req.body)
        return resp.status(201).send(items)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
}



const GetAll = (model) => async (req, resp) => {
    try {
        const items = await model.find().lean().exec()
        return resp.send(items)
    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
}


const GetOne = (model) => async (req, resp) => {
    try {
        const items = await model.findById(req.params.id).lean().exec()

        return resp.send(items)

    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
}

//findby name
const GetByName = (model) => async (req, resp) => {
    try {
        const items = await model.findById(req.params.first_name).lean().exec()

        return resp.send(items)

    }
    catch (e) {
        return resp.status(500).send(e.message)
    }
}


const updateOne = (model) => async (req, resp) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        return resp.send(item);
    } catch (err) {
        return resp.status(500).send(err.message);
    }
};

const deleteOne = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id);

        return res.send(item);
    } catch (err) {
        return res.status(500).send(err.message);
    }
};




module.exports = (model) => {
    return {
        post: post(model),
        GetAll: GetAll(model),
        GetByName: GetByName(model),
        GetOne: GetOne(model),
        updateOne: updateOne(model),
        deleteOne: deleteOne(model)
    }
}