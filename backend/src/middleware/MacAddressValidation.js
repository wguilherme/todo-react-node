const MacAddressValidation = (req, res, next) => {
  if (!req.body.macaddress) {
    return res.status(400).json({ error: "macadress é obrigatório" });
  } else next();
};

module.exports = MacAddressValidation;