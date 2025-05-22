import axios from "axios";
import { IPayloadCourse } from "../types/type";
/*eslint-disable*/
// @ts-ignore
import { parseStringPromise } from "xml2js";

export const getToken = async () => {
  try {
    const response = await axios.get<IPayloadCourse>(
      "https://gateway.abcex.io/api/v2/exchange/public/instrument/rates",
      { responseType: "text" }, // Указываем, что ожидаем текстовый ответ
    );
    if (response.data) {
      const result: IPayloadCourse = await parseStringPromise(response.data, {
        explicitArray: false,
      });
      const usdtCours = result.rates.item.filter(
        (course) => course.from === "USDT",
      );
      const procent = Number(usdtCours[0].out) * 0.0025;
      const buyRes = (Number(usdtCours[0].out) + procent).toFixed(2);
      const sallRes = (Number(usdtCours[0].out) - procent).toFixed(2);
      return {
        buy: buyRes,
        sall: sallRes,
      };
    }
    /*eslint-disable*/
    // @ts-ignore
  } catch (e) {
    return false;
  }
};
