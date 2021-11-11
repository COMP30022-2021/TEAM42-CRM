const Engagement = require("../models/engagement");

exports.createNewEngagement = async (req, res) => {
  try {
    let { vendor_id, employee_id, business_id, date, purpose, rating } = req.body;
    let newEngagement = new Engagement(vendor_id, employee_id, business_id, date, purpose, rating);

    newEngagement.save().then((engagement) => {
      res.status(200).json({
        status_code: 200,
        status_message: "Success",
        product: {
          vendor_id: newEngagement.vendor_id,
          employee_id: newEngagement.employee_id,
          business_id: newEngagement.business_id,
        }
      });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error"
    })
  }
};

exports.findAll = async (req, res) => {
  try {
    const vendorId = req.params.id;
    let [engagements, _] = await Engagement.findAll(vendorId);
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      engagements
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};
