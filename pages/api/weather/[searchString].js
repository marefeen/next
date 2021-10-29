import {getWeatherData} from "../../../util/weatherApi"


export default async (req, res) => {
    const string = req.query.searchString;
    try {
        const data = await getWeatherData(string)
        res.json(data);
    } catch (e) {
        res.status(400).json({error: 'cannot find data'})
    }    
}