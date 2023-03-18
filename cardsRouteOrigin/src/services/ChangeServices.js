class ChangeServices {
  static async delWords(id) {
    try {
      const resp = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/22/update/${id}`,
        {
          method: "POST",
        }
      );

      const data = await resp.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default ChangeServices;
