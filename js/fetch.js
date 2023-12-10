async function fetchData() {
    try {
        const res = await fetch('http://localhost:8080/api/v1/content/1', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmF0b2x5IiwiaWQiOjEsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaWF0IjoxNzAxODg2Njg0LCJleHAiOjE3MDE4OTAyODR9.HGtuhP0avrkCwoEVjyUwNgChBJ7nQ7-mLIVMHt8y1rmgivuFJl60b5mOwXER8fn5IWTAeBbbdkgW7An_qwx3vg'
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        // Предполагая, что data это объект или массив
        document.getElementById('movie1').innerText = data.title;
    } catch (e) {
        console.error('Fetch error:', e);
        document.getElementById('movie1').innerText = 'Ошибка загрузки данных';
    }
}

// Вызов функции при загрузке страницы
window.onload = fetchData;
