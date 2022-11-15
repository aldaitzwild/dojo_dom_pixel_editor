const app = document.getElementById('app');
const canvasSize = 11;

const colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.id = 'colorPicker';

app.append(colorPicker);

function createTable(size) {
    const table = document.createElement('table');


    for (let i = 0; i < size; i++) {
        const tr = document.createElement('tr');
        table.append(tr);

        for (let j = 0; j < size; j++) {
            const td = document.createElement('td');
            tr.append(td);

            td.addEventListener('click', function () {
                const inputColor = document.getElementById('colorPicker');
                this.style.backgroundColor = inputColor.value;
            });
        }
    }

    app.append(table);
}

const resetBtn = document.createElement('button');
resetBtn.innerHTML = "Reset";
app.append(resetBtn);
resetBtn.addEventListener('click', function () {
    const tds = document.getElementsByTagName('td');

    for (const td of tds) {
        td.style.backgroundColor = "white";
    }
});

createTable(canvasSize);
//createTable(18);





