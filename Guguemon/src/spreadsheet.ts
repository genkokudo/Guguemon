// シートを操作する
function initSheet() {
    // 現在のシート取得
    var sheet = SpreadsheetApp.openById('<シートID>').getActiveSheet();
    // シートの内容を消しちゃいます
    sheet.clear();

    // 1から始まるので注意
    sheet.getRange(1, 1).setValue('ginpay');
    sheet.getRange(1, 2).setValue(82).setBackground('tomato');	// 値セットして色変更
}

// スプレッドシート用関数
function GETRESULT(input) {
    if (input.map) {
        // それぞれの要素に対して関数を適用する(再帰)
        return input.map(GETRESULT);
    } else {
        return input >= 80 ? 'PASS' : 'FAIL';
    }
}

// 関数を実行するメニューを複数追加
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    var menu = ui.createMenu('メッセージ表示');
    menu.addItem('Hello world! 実行', 'myFunction');
    menu.addSeparator();                       // 区切り線を追加する
    menu.addItem('Hello world! 2 実行', 'myFunction2');
    menu.addSubMenu(                           // サブメニューをメニューに追加する
        ui.createMenu("サブメニュー")             // Uiクラスからメニューを作成する
            .addItem("サブアイテム1", "myFunction2") // メニューにアイテムを追加する    
    );
    menu.addToUi();
}

function myFunction() {
    Browser.msgBox('Hello world!');
}

function myFunction2() {
    Browser.msgBox('Hello world! 2');
}