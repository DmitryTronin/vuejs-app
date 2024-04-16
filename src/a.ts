import axios from 'axios';
import ref from 'vue'

console.log(axios.isCancel('something'));

class Tesacher {
}

const teachers = ref<Teacher|null>(null)
{
    await axios

    .get<Teacher[]>(`api/teachers/`)

    .then((response) => {

        teachers.value = response.data;

    })
}

