
class AddServices {
    static async addWords() {
        try {
            const resp = await fetch (`http://itgirlschool.justmakeit.ru/api/words/add`, {
                method:"ADD"
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

export default AddServices;