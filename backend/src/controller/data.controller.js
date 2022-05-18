const express = require("express");
const Data1 = require("../modal/data_1.model");
const Data2 = require("../modal/data_2.model");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const data1 = await Data1.find();
    const data2 = await Data2.find();
    const combine = data1.map(async (item) => {
        const data2_item = data2.find((item2) => item2.email === item.email);
        return {
            id: item._id,
            full_name: item.full_name,
            email: item.email,
            team_name: data2_item.team_name,
            number: item.number,
            city: item.city,
            url: item.url,
        };
    });
    const result = await Promise.all(combine);
    res.send(result);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;

