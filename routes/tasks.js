router.post("/create", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/id/:_id", async (req, res) => {
  try {
    const task = await Task.findById(req.params._id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/markAsCompleted/:_id", async (req, res) => {
  try {
    const task = await Task.findById(req.params._id);
    if (!task) {
      return res.status(404).send();
    }
    task.completed = true;
    await task.save();
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/id/:_id", async (req, res) => {
  try {
    const task = await Task.findById(req.params._id);
    if (!task) {
      return res.status(404).send();
    }
    if (req.body.title) {
      task.title = req.body.title;
    }
    await task.save();
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/id/:_id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params._id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
