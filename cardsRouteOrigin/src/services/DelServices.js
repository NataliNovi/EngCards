class DelServices {
    static async delWords(id) {
        try {
            const resp = await fetch (`http://itgirlschool.justmakeit.ru/api/words/${id}`, {
                method:"DELETE"
            })
            
            const data = await resp.json()
            //console.log(data)
            return data
            }

catch (e) {
    console.error(e)
}
}
}

export default DelServices;