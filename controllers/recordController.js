const Record = require('../modals/records');
const { loadExcelData } = require('../utils/excelLoader');

exports.loadData = async (req, res) => {
  try {
    const data = loadExcelData('/dummy_data.xlsx');
    await Record.insertMany(data);
    res.status(200).send('Data loaded successfully');
  } catch (error) {
    res.status(500).send('Error loading data: ' + error.message);
  }
};

exports.getAllRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).send('Error fetching records: ' + error.message);
  }
};