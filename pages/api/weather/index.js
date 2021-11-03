import {getWeatherData} from "../../../util/weatherApi"


export default async (req, res) => {
    const {query,lang} = req.query;
    try {
        const data = await getWeatherData({query,lang})
        res.json(data);
    } catch (e) {
        res.status(400).json({error: 'cannot find data'})
    }    
}