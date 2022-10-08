
function main() {
    return {
        url: 'https://rickandmortyapi.com/api/character',   //propiedades
        characters: [],
        numPages: 0,
        page:1,
        changePage: async function (type) {
            if (type === 'next' && this.page < this.numPages) {
                this.page++;
            }else if(type === 'prev' && this.page > 1){
                this.page--;
            }
            const response = await fetch(`${this.url}?page=${this.page}`);
            this.characters = (await response.json()).results;
        }
    }
}
