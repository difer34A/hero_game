import {data, coin} from "../../data";

export default function handler(req, res) {
    if (req.method == "POST") {
        console.log("got post req " + req.body);
        if(coin > 0) {
        }
    } 
    else{
        const { pid } = req.query;
        const result = data.find(item => item.id == pid)
        return res.status(200).json(result);
    }
}