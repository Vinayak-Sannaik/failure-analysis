const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  CompanyReference: String,
  PolicyNumber: String,
  PartnerRef: String,
  IncidentDate: Date,
  AccidentCircumstances: String,
  DamageToVehicle: String,
  PreExistingDamage: String,
  RegistrationNumber: String,
  MAKE: String,
  MODEL: String,
  EngineSize: Number,
  RegistrationDate: Date,
  ThirdPartyInsurer: String,
  ThirdPartyRef: String,
  ThirdPartyClient: String,
  Driver_FirstName: String,
  Driver_LastName: String,
  Driver_Contact_Email: String,
  RepairerName: String,
  Repairer_Contact_Email: String,
}, { timestamps: true });

module.exports = mongoose.model('Record', recordSchema);