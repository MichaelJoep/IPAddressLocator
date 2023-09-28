//const userDeviceInfo = require("client-device-ip-details");
const axios = require("axios");
//const os = require("os");
const dotenv = require("dotenv")
const localIP   =  require("ip");


dotenv.config({path: './config.env'});
const API_KEY = process.env.ABSTR_API_KEY;
const URL = `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`;

const sendAPIRequest = async (deviceIP) => {
const apiResponse = await axios.get(URL, + "&api_address=" + deviceIP);

return apiResponse.data;
}


exports.getUserInfo = async (req, res) => {
    try {
        const deviceIP = localIP.address();


        const getGeoipInfo = await sendAPIRequest(deviceIP)
        res.status(200).json({
            "device IP is ": deviceIP,
            ...getGeoipInfo
        });

    } catch (error) {
        res.status(500).send(error.message)
    }

}