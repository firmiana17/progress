/* index.html */

// 10秒ごとに、4枚の画像を順に変更して表示する

const indexMessagesArray = [
    "images/index-theme1.jpg",
    "images/index-theme2.jpg",
    "images/index-theme3.jpg",
    "images/index-theme4.jpg"
];

// 4枚の画像を1つの配列に入れている
let i = 0;
// 配列の[i]番目(images/index-theme(i+1).png)の画像を指定するための変数
const indexMessage = document.querySelector(".indexMessage");
// index-messageクラスのHTML要素を選択し、変数indexMessageに代入する

function imgAppear() {
    i++;
    // iの値を1増やす
    if (i > 3) {
        i = 0;
        // もしiの値が3より大きくなった
        // ([3]番目＝images/index-theme4.png 以降の枚数を指定しそうになった)ら、
        // iの値を0に戻す([0]番目＝images/index-theme1.png)
    }
    const bgImage = `url(${indexMessagesArray[i]})`;
    // url()の中身を配列の[i]番目の要素に変更し、変数bgImage に代入する
    indexMessage.style.backgroundImage = bgImage;
    // index-messageクラスのCSSのうち、background-image:の値を、
    // bgImageに代入した値(配列の[i]番目の要素)に変更する
}

setInterval(imgAppear, 10000);
// 10秒ごとにimgAppearを呼び出す


/* lesson.html */
let windowSize = window.innerWidth;
// 更新時のウィンドウ幅を取得し、変数windowSize に代入する

window.onresize = function() {
    windowSize = window.innerWidth;
}
// ウィンドウ幅のリアルタイムな値を取得し、変数windowSizeに再代入する

let flg1 = false;
let flg2 = false;
let flg3 = false;
let flg4 = false;
let flg5 = false;
let flg6 = false;
// ウィンドウ幅が1000px以下のとき、HTML/CSS、JavaScript、PHP、MySQL、Java、Rubyの
// 説明ボックスの表示に関するフラグを表す変数。
// ※ウィンドウ幅が1001px以上のときにも、値をtrueにして用いる。

let flg7 = false;
let flg8 = false;
let flg9 = false;
// ウィンドウ幅が1001px以上のとき、columns1クラス(HTML/CSS と JavaScript のペア)、columns2クラス(PHP と MySQL のペア)、
// columns3クラス(Java と Ruby のペア) の 各説明ボックスの表示に関するフラグを表す変数。
// ※ウィンドウ幅が1000px以下のときにも、値をtrueにして用いる。

window.addEventListener("scroll", function() {
    let coordY = window.scrollY;
    // window.scrollYにより、ページをスクロールした値を取得し、変数coordY に代入する

    const hc = document.querySelector(".htmlCss");
    const js = document.querySelector(".js");
    const php = document.querySelector(".php");
    const sql = document.querySelector(".mysql");
    const ja = document.querySelector(".java");
    const rb = document.querySelector(".ruby");
    // それぞれのクラスをもつHTML要素を取得し、それぞれの変数に代入する
    // ※1000px以下のときメインで使用

    const columns1 = document.querySelector(".columns1");
    const columns2 = document.querySelector(".columns2");
    const columns3 = document.querySelector(".columns3");
    // それぞれのクラスをもつHTML要素を取得し、それぞれの変数に代入する
    // ※1001px以上のときメインで使用

    if(windowSize <= 1000) {
    // ウィンドウ幅が1000px以下のとき

        if(coordY >= 250 && flg1 === false) {
        // スクロール値が250px以上、変数flg1 がfalse の2つの条件を満たすとき、
            flg1 = true;
            // 1⃣ 変数flg1 の値をtrueにする
            //    ※trueをfalseに戻す方法はないので、一度だけ処理が行われるようになる
            hc.animate(
                [ {opacity: 0}, {opacity: 1} ],
                { duration: 1000, fill: "forwards"}
            );
            // 2⃣ htmlcssクラスをもつHTML要素をフェードインで表示する
            //    ※opacity: 0 → 1 ・・・ 非表示 → 表示
            //    ※duration: 1000 ・・・ 変化にかかる時間
            //    ※fill: "forwards" ・・・アニメーション再生後の画像の状態(forwards は opacity: 1 (表示) の状態)            
            columns1.style.opacity = 1;
            flg7 = true;
            // 3⃣ column1クラスをもつHTML要素を表示し、変数flg7 をtrueにする
            //　　※3⃣の処理がないと、ウィンドウ幅が1001px以上に変更したときに非表示に戻ってしまったり、
            //      表示できてもフェードイン処理が再び行われてしまうので、それらを防ぐために加えた処理
        }

        if(coordY >= 500 && flg2 === false) {
            flg2 = true;
            js.animate(
                [ {opacity: 0}, {opacity: 1} ],
                { duration: 1000, fill: "forwards"}
            );
            columns1.style.opacity = 1;
            flg7 = true;
        }

        if(coordY >= 750 && flg3 === false) {
            flg3 = true;
            php.animate(
                [ {opacity: 0}, {opacity: 1} ],
                { duration: 1000, fill: "forwards"}
            );
            columns2.style.opacity = 1;
            flg8 = true;
        }

        if(coordY >= 1000 && flg4 === false) {
            flg4 = true;
            sql.animate(
                [ {opacity: 0}, {opacity: 1} ],
                { duration: 1000, fill: "forwards"}
            );
            columns2.style.opacity = 1;
            flg8 = true;
        }

        if(coordY >= 1250 && flg5 === false) {
            flg5 = true;
            ja.animate(
                [ {opacity: 0}, {opacity: 1} ],
                { duration: 1000, fill: "forwards"}
            );
            columns3.style.opacity = 1;
            flg9 = true;
        }

        if(coordY >= 1500 && flg6 === false) {
            flg6 = true;
            rb.animate(
                [ {opacity: 0}, {opacity: 1} ],
                { duration: 1000, fill: "forwards"}
            );
            columns3.style.opacity = 1;
            flg9 = true;
        }
    } else {
    // ウィンドウ幅が1001px以上のとき

        if(coordY >= 250 && flg7 === false) {
            flg7 = true;
            columns1.animate(
                [ {opacity: 0}, {opacity: 1} ],
                { duration: 1000, fill: "forwards"}
            );
            hc.style.opacity = 1;
            flg1 = true;
            js.style.opacity = 1;
            flg2 = true;
            // columns1、2、3 は言語の説明ボックスが2つずつのペアになっているので、
            // それらの opacity や フラグを true にする処理をまとめて行うことで、
            // ウィンドウ幅が変化することで画面が非表示に戻ってしまったり、
            // フェードイン処理が再び行われたりするのを防いでいる
        }

        if(coordY >= 500 && flg8 === false) {
            flg8 = true;
            columns2.animate(
                [ {opacity: 0}, {opacity: 1} ],
                { duration: 1000, fill: "forwards"}
            );
            php.style.opacity = 1;
            flg3 = true;
            sql.style.opacity = 1;
            flg4 = true;
        }

        if(coordY >= 750 && flg9 === false) {
            flg9 = true;
            columns3.animate(
                [ {opacity: 0}, {opacity: 1} ],
                { duration: 1000, fill: "forwards"}
            );
            ja.style.opacity = 1;
            flg5 = true;
            rb.style.opacity = 1;
            flg6 = true;
        }
    }

});



/* contact.html */

// 送信ボタンを押すと、以下の処理を行う
// 1⃣ 入力内容が1つの配列にまとめられ、データとして扱えるようになる
// 2⃣ 入力した内容がテキストボックス・テキストエリアから消去される
// 3⃣ 入力画面が「送信しました。」の画面に切り替わる

const submit = document.querySelector(".submit");
submit.addEventListener("click", function() {
    const questionArray = [];
    // 配列を用意し、この中に取得した値を追加してまとめることで、
    // サーバーに送信するなどの処理をしやすくする

    console.log(questionArray);
    // 配列questionArrayが空であることの確認

    const lastName = document.querySelector("#lastName");
    const firstName = document.querySelector("#firstName");
    const eMail = document.querySelector("#eMail");
    const textArea = document.querySelector("#textArea");
    // それぞれのidをもつ入力欄を選択し、入力値を変数に代入する

    const eMailPattern = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ui;
    if (lastName === "") {
        const name1Error = document.querySelector(".name1-error");
        console.log(name1Error);
        name1Error.style.visibility = "visible";
    } else if (firstName === "") {
        const name2Error = document.querySelector(".name2-error");
        name2Error.style.visibility = "visible";
    } else if (eMail === "" || !eMailPattern.test(eMail)) {
        const name2Error = document.querySelector(".eMail-error");
        name2Error.style.visibility = "visible";
    } else if (textArea === "") {
        const textError = document.querySelector(".text-error");
        textError.style.visibility = "visible";
    } else {

        questionArray.push(lastName.value);
    questionArray.push(firstName.value);
    questionArray.push(eMail.value);
    questionArray.push(textArea.value);
    // 取得した4つの入力値を配列questionArrayの要素として追加

    console.log(questionArray);
    // 配列questionArrayに4つの要素が追加されていることの確認

    const contact = document.querySelector("#contactWrapper");
    contact.style.display = "none";
    // id名をcontactWrapperとするHTML要素のCSSに
    //「display: none;」を追加することで、
    // 入力部分を非表示にするように変更する処理

    const result = document.querySelector("#resultWrapper");
    result.style.display = "block";
    // id名をresultWrapperとするHTML要素のCSSに
    //「display: block;」を追加することで、
    // 非表示の要素を表示させるように変更する処理

    firstName.value = "";
    lastName.value = "";
    eMail.value = "";
    textArea.value = "";
    // 4つの入力欄をすべて空にする

    window.scroll({top: 0});
    // window.scroll()により、ページ最上部(top: 0)へ遷移する

    
    //** 入力内容を配列内に残しておかないようにするための処理 **//

    questionArray.splice(0);
    // 配列の要素をすべて削除する
    
    console.log(questionArray);
    // splice(0)により、配列の要素がすべて削除されたことの確認
    }
});