let numbers = []; // 数字を格納する配列

document.getElementById('addButton').addEventListener('click', () => {
    const input = document.getElementById('numberInput');
    const number = parseFloat(input.value); // 入力を数値に変換

    if (!isNaN(number)) { // 数字が正しいか確認
        numbers.push(number); // 配列に数字を追加
        input.value = ''; // 入力フィールドをクリア
        console.log(`追加された数字: ${number}`);
    } else {
        alert('有効な数字を入力してください！');
    }
});

document.getElementById('calculateButton').addEventListener('click', () => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0); // 合計を計算
    document.getElementById('result').textContent = `合計: ${total}`; // 合計を表示
});
