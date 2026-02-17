// 訪問カウンター機能
function initVisitorCounter() {
    const STORAGE_KEY = 'horseNameMakerVisits';
    let visitCount = parseInt(localStorage.getItem(STORAGE_KEY) || '0');

    // 訪問回数を増やす
    visitCount++;
    localStorage.setItem(STORAGE_KEY, visitCount.toString());

    // カウンターを表示（アニメーション付き）
    const counterElement = document.getElementById('visitorCount');
    if (counterElement) {
        // 0から現在の数値までアニメーション
        let currentCount = 0;
        const increment = Math.ceil(visitCount / 30); // 30フレームでアニメーション
        const duration = 1000; // 1秒
        const stepTime = duration / 30;

        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= visitCount) {
                currentCount = visitCount;
                clearInterval(timer);
            }
            counterElement.textContent = currentCount.toLocaleString('ja-JP');
        }, stepTime);
    }
}

// ページ読み込み時に訪問カウンターを初期化
document.addEventListener('DOMContentLoaded', initVisitorCounter);

// 競走馬名前生成データベース
const nameDatabase = {
    // 食べ物系
    food: {
        prefixes: ['ゴールデン', 'シルバー', 'スイート', 'ビター', 'フレッシュ', 'サニー', 'ミスティ', 'クリスタル', 'プレミアム', 'ロイヤル', 'ノーブル', 'エレガント', 'リッチ', 'デリシャス', 'グルメ', 'ファンシー', 'ラグジュ', 'マジック', 'ワンダー', 'ドリーム', 'ハッピー', 'ラッキー', 'ブライト', 'シャイニー', 'スパークル', 'グリッター', 'ダズル', 'ラブリー', 'キュート', 'プリティ', 'チャーミング', 'エンジェル', 'フェアリー', 'ミラクル', 'ファンタジー', 'ミステリー'],
        bases: ['アップル', 'ベリー', 'チェリー', 'メロン', 'オレンジ', 'レモン', 'ピーチ', 'グレープ', 'ストロベリー', 'バナナ', 'キャラメル', 'ショコラ', 'ハニー', 'シュガー', 'ミント', 'バニラ', 'ココア', 'マンゴー', 'パイン', 'ライチ', 'キウイ', 'プラム', 'アプリコット', 'ラズベリー', 'ブルーベリー', 'マカロン', 'エクレア', 'タルト', 'パフェ', 'ソルベ', 'ジェラート', 'プリン', 'カスタード', 'マロン', 'ナッツ', 'アーモンド', 'ワッフル', 'クレープ', 'ビスケット', 'クッキー', 'キャンディ', 'ドロップ', 'ロリポップ', 'グミ', 'ゼリー', 'ムース', 'スフレ', 'シフォン', 'ミルフィーユ', 'ティラミス', 'パンナコッタ', 'ババロア', 'シャーベット', 'フラッペ', 'スムージー', 'ラテ', 'モカ', 'エスプレッソ', 'カプチーノ', 'マキアート'],
        suffixes: ['キング', 'クイーン', 'プリンス', 'プリンセス', 'ロード', 'レディ', 'スター', 'ドリーム', 'ビート', 'フラッシュ', 'エース', 'ヒーロー', 'チャンプ', 'ウィナー', 'マスター', 'ボス', 'ジーニアス', 'レジェンド', 'ミラクル', 'マジック', 'ファンタジー', 'ストーリー', 'テイル', 'ソング', 'ダンス', 'ワルツ', 'メロディ', 'ハーモニー', 'リズム', 'ビート']
    },

    // 生き物系
    animal: {
        prefixes: ['ワイルド', 'ノーブル', 'ロイヤル', 'マジェスティック', 'ブレイブ', 'スウィフト', 'シャドウ', 'サンダー', 'ファイアー', 'アイス', 'ダーク', 'ライト', 'ゴールド', 'シルバー', 'クリムゾン', 'サファイア', 'エメラルド', 'ダイヤモンド', 'ミスティック', 'レジェンド', 'エンシェント', 'セイクリッド', 'ディバイン', 'マイティ', 'フィアース', 'フェロシャス', 'グレイト', 'グランド', 'スプリーム', 'プライム', 'アルファ', 'オメガ', 'ラスト', 'ファースト'],
        bases: ['イーグル', 'ファルコン', 'ホーク', 'ライオン', 'タイガー', 'パンサー', 'ウルフ', 'フォックス', 'ドラゴン', 'フェニックス', 'ペガサス', 'ユニコーン', 'グリフォン', 'ドルフィン', 'シャーク', 'ベア', 'バッファロー', 'ジャガー', 'チーター', 'レパード', 'コブラ', 'バイパー', 'スコーピオン', 'スパイダー', 'バタフライ', 'ビートル', 'ホーネット', 'クラーケン', 'ヒドラ', 'ケルベロス', 'バハムート', 'リバイアサン', 'ワイバーン', 'ガルーダ', 'スフィンクス', 'ミノタウロス', 'サラマンダー', 'バジリスク', 'キマイラ', 'マンティコア', 'サーベルタイガー', 'マンモス', 'トリケラトプス', 'ティラノサウルス', 'プテラノドン', 'ステゴサウルス', 'ヴェロキラプトル', 'アンキロサウルス', 'ブラキオサウルス', 'スピノサウルス', 'アロサウルス', 'イグアノドン', 'パキケファロ', 'コンドル', 'アルバトロス', 'ペリカン', 'フラミンゴ', 'ピーコック', 'レイヴン', 'クロウ'],
        suffixes: ['キング', 'ロード', 'マスター', 'チーフ', 'ハート', 'ソウル', 'スピリット', 'ウィング', 'クロー', 'ファング', 'アイ', 'テイル', 'ブレス', 'ロア', 'ハウル', 'クライ', 'レイジ', 'フューリー', 'パワー', 'フォース', 'ストライク', 'アタック', 'チャージ', 'ラッシュ', 'ブリッツ', 'ストーム', 'テンペスト', 'ハリケーン', 'サイクロン', 'トルネード']
    },

    // 宇宙系
    space: {
        prefixes: ['コスミック', 'ステラ', 'ルナ', 'ソーラー', 'ギャラクシー', 'ネビュラ', 'オーロラ', 'セレスティアル', 'アストラル', 'スペース', 'スカイ', 'ヘブン', 'インフィニティ', 'エターナル', 'ユニバース', 'プラネット', 'サテライト', 'オービタル', 'インター', 'ハイパー', 'ウルトラ', 'メガ', 'スーパー', 'グランド'],
        bases: ['スター', 'ムーン', 'サン', 'マーズ', 'ヴィーナス', 'ジュピター', 'サターン', 'ネプチューン', 'プルート', 'コメット', 'メテオ', 'アステロイド', 'クエーサー', 'パルサー', 'ノヴァ', 'マーキュリー', 'ウラヌス', 'アース', 'ガイア', 'タイタン', 'イオ', 'エウロパ', 'ガニメデ', 'カリスト', 'ミマス', 'エンケラドス', 'シリウス', 'ベガ', 'アルタイル', 'デネブ', 'アンタレス', 'カペラ', 'リゲル', 'ベテルギウス', 'プロキオン', 'アルデバラン', 'ポラリス', 'カノープス'],
        suffixes: ['ライト', 'レイ', 'ビーム', 'フレア', 'バースト', 'ストーム', 'ウェーブ', 'エクリプス', 'オービット', 'ボイジャー', 'エクスプローラー', 'パイオニア', 'ディスカバリー', 'ホライゾン', 'ゲート', 'ポータル', 'ダスト', 'クラウド', 'リング', 'フィールド']
    },

    // 四字熟語系
    idiom: {
        names: [
            'イッキトウセン', 'テンカムソウ', 'ヒャッカリョウラン', 'シップウジンライ', 'デンコウセッカ', 'フウリンカザン', 'セングンバンバ', 'ユウオウマイシン', 'チョトツモウシン', 'ハチクノイキオイ', 'キエンバンジョウ', 'イキショウテン', 'イフウドウドウ', 'セイジョハチク', 'リュウジョウコシ', 'ホウオウウヒ', 'ヒリュウジョウウン', 'ソウバカンカ', 'テンバコウクウ', 'リュウチョウコガ', 'シンシュツキボツ', 'ヘンゲンジザイ', 'ジュウオウムジン', 'シシハクト', 'リュウギンコショウ', 'ヨウヨウジジャク', 'ホウメイチョウヨウ', 'リュウバンコキョ', 'フンセンレイトウ', 'ケンコイッシ',
            'イチレンタクショウ', 'シンキイッテン', 'ハクシュカッサイ', 'セイシンイットウ', 'ムガムチュウ', 'イッシンフラン', 'テンシンランマン', 'ジユウジザイ', 'ムテッポウ', 'ムソウテンガイ', 'ムヨウノチョウブツ', 'ムゲンダイ', 'ムリョクムヘン', 'ゼンリョクトッソウ', 'シッソウバンリ', 'センリバンバ', 'バンリイックウ',
            'ゴウカケンラン', 'キンシコウヨウ', 'ギンリンキラメキ', 'セイウンノシ', 'ハクウンコウシ', 'コウウンリュウスイ', 'シュンプウバトウ', 'シュウフウサッソウ', 'トウフウセツゲツ', 'カフウセツゲツ',
            'ライジンフウジン', 'フウジンライジン', 'リュウトウダトウ', 'トラフウリュウウン', 'ホウオウテンショウ', 'キリンジアイ', 'ハクチョウノマイ', 'ツルノヒトコエ', 'タカノツメ', 'ワシノメ',
            'キンウンコクウン', 'ギンカイキンパ', 'ヒャクセンレンマ', 'センバンバンカ', 'バンリチョウクウ', 'センリガンモク', 'イッキカセイ', 'イッセンソクハツ', 'ソクセンソクケツ', 'ソッコウムテキ',
            'ムテキムソウ', 'ムソウムヒ', 'ムヒムテキ', 'テンカムテキ', 'テンカムヒ', 'テンカタイヘイ', 'テンカブブ', 'テンカトウイツ', 'テンカサイキョウ', 'テンカイッピン',
            'セイテンハクジツ', 'セイテンノヘキレキ', 'ハクジツセイテン', 'アオテンハクジツ', 'シュンランシュウキク', 'カチョウフウゲツ', 'セッチュウノコウ', 'セッカノコウ', 'ハナトリフウゲツ', 'ゲッカビジン',
            'ユウユウジテキ', 'ユウユウカンカン', 'カンカンガクガク', 'ガクガクシキ', 'シキサイホウフ', 'ホウフタサイ', 'サイシキケンラン', 'ケンランゴウカ', 'ゴウカゼツリン', 'ゼツリンノビ',
            'ビジンハクメイ', 'ハクメイノキ', 'キセキノホシ', 'ホシノキラメキ', 'キラメキノホシ', 'ツキノヒカリ', 'ヒカリノミチ', 'ミチノヒカリ', 'ヒカリノツバサ', 'ツバサノヒカリ',
            'カゼノツバサ', 'ツバサノカゼ', 'カゼノゴトク', 'ゴトクカゼ', 'ライコウノゴトク', 'ゴトクライコウ', 'ライメイノゴトク', 'ゴトクライメイ', 'センコウイッセン', 'イッセンセンコウ'
        ]
    },

    // 自然系
    nature: {
        prefixes: ['ストーム', 'サンダー', 'ブリザード', 'トルネード', 'ハリケーン', 'タイフーン', 'ミスト', 'フロスト', 'ファイアー', 'フレイム', 'ブレイズ', 'インフェルノ', 'ボルケーノ', 'アクア', 'ウォーター', 'オーシャン', 'ディープ', 'ハイ', 'グレート', 'マイティ', 'ワイルド', 'ピュア', 'クリア', 'ブライト'],
        bases: ['ウィンド', 'レイン', 'スノー', 'サンダー', 'ライトニング', 'クラウド', 'スカイ', 'オーシャン', 'リバー', 'マウンテン', 'フォレスト', 'フレイム', 'アイス', 'ストーン', 'クリスタル', 'レイク', 'シー', 'ビーチ', 'アイランド', 'ヒル', 'バレー', 'キャニオン', 'デザート', 'ジャングル', 'サバンナ', 'ツンドラ', 'グレイシャー', 'ボルケーノ', 'ガイザー', 'ウォーターフォール', 'レインボー', 'サンライズ', 'サンセット', 'ムーンライト', 'スターライト', 'トワイライト', 'ドーン', 'ダスク'],
        suffixes: ['ブレイカー', 'ライダー', 'ダンサー', 'ランナー', 'チェイサー', 'ハンター', 'ウォリアー', 'ナイト', 'ロード', 'キング', 'クイーン', 'プリンス', 'ガーディアン', 'セイバー', 'レンジャー', 'スカウト', 'トレイル', 'パス', 'ロード', 'ウェイ']
    },

    // 神話系
    mythology: {
        prefixes: ['ディバイン', 'ホーリー', 'セイクリッド', 'ミスティック', 'エンシェント', 'レジェンダリー', 'イモータル', 'エターナル', 'セレスティアル', 'ヘブンリー', 'ブレスド', 'グロリアス', 'マジェスティック', 'ノーブル', 'ロイヤル', 'インペリアル', 'サプリーム', 'グランド', 'アルティメット', 'プライム', 'ファースト', 'ラスト', 'トゥルー', 'ピュア'],
        bases: ['ゼウス', 'アポロン', 'アテナ', 'アルテミス', 'ヘルメス', 'ポセイドン', 'ハデス', 'アレス', 'オーディン', 'トール', 'ロキ', 'フレイヤ', 'ヴァルキリー', 'フェンリル', 'スレイプニル', 'ヘラ', 'アフロディーテ', 'ヘパイストス', 'デメテル', 'ヘスティア', 'ディオニュソス', 'ペルセポネ', 'ヘカテ', 'ニケ', 'イリス', 'フリッグ', 'バルドル', 'ティル', 'ヘイムダル', 'イドゥン', 'ラー', 'アヌビス', 'ホルス', 'イシス', 'オシリス', 'バステト', 'セト', 'トート'],
        suffixes: ['ブレス', 'グレイス', 'パワー', 'フォース', 'マイト', 'グローリー', 'レガシー', 'デスティニー', 'フェイト', 'ソード', 'ブレード', 'スピア', 'ハンマー', 'ボウ', 'シールド', 'アーマー', 'クラウン', 'セプター', 'オーブ', 'ウィング']
    },

    // ユーモア系
    humor: {
        names: [
            'ブタノカク', 'クツシタ', 'イヤダヨ', 'カアチャン', 'エガオデネ', 'オナカスイタ', 'ネムイヨ', 'マダカナ', 'ヤメテヨ', 'ドウシヨウ',
            'アシタガアル', 'キョウハヤメ', 'モウイヤダ', 'タスケテヨ', 'ワスレタヨ', 'シラナイヨ', 'ミエナイヨ', 'キコエナイ', 'ワカラナイ',
            'オチャノミタイ', 'ゴハンマダ', 'ネタイノニ', 'オキタクナイ', 'カエリタイ', 'アソビタイ', 'ヤスミタイ', 'サボリタイ',
            'ウソダロウ', 'マジカヨ', 'ヤバイヨ', 'スゴイネ', 'ヘンダヨ', 'オカシイナ', 'フシギダネ', 'ナンデヤネン',
            'モウダメダ', 'ガンバルゾ', 'ヤルキナシ', 'テキトウニ', 'マアイイカ', 'ドウデモイイ', 'シカタナイ', 'ソウダネ',
            'オトウサン', 'オカアサン', 'オニイチャン', 'オネエチャン', 'オジイチャン', 'オバアチャン',
            'ハラヘッタ', 'ノドカワイタ', 'ツカレタヨ', 'サムイヨ', 'アツイヨ', 'イタイヨ', 'コワイヨ',
            'アリガトウ', 'ゴメンネ', 'ヨロシクネ', 'バイバイ', 'マタネ', 'ジャアネ', 'サヨナラ',
            'ヤッタゼ', 'ヤッタネ', 'ヤッホー', 'ウレシイナ', 'タノシイナ', 'オモシロイ', 'ツマンナイ', 'ヒマダナ',
            'メンドイ', 'ダルイナ', 'キツイヨ', 'ラクダナ', 'イソガシイ', 'ノンビリ', 'ユックリ', 'ハヤクシテ',
            'マッテヨ', 'イクゾ', 'イコウヨ', 'カエロウ', 'トマレ', 'ススメ', 'ニゲロ', 'オイデ',
            'ダイジョウブ', 'シンパイナイ', 'アンシンシテ', 'ガンバッテ', 'オツカレ', 'ゴクロウ', 'スミマセン', 'ドウモ'
        ]
    }
};

// 履歴管理（セッションストレージ使用）
let history = [];
const MAX_HISTORY = 100;

// DOM要素
const themeSelect = document.getElementById('theme');
const generateBtn = document.getElementById('generateBtn');
const outputBox = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');
const historyList = document.getElementById('historyList');
const historyCount = document.getElementById('historyCount');

// 現在生成された名前
let currentName = '';

// テーマ名の日本語マッピング
const themeNames = {
    all: 'ランダム',
    food: '食べ物系',
    animal: '生き物系',
    space: '宇宙系',
    idiom: '四字熟語系',
    nature: '自然系',
    mythology: '神話系',
    humor: 'ユーモア系'
};

// 名前生成関数
function generateHorseName(theme) {
    const MIN_LENGTH = 2;
    const MAX_LENGTH = 9;
    let attempts = 0;
    const MAX_ATTEMPTS = 100; // 無限ループ防止

    while (attempts < MAX_ATTEMPTS) {
        attempts++;
        let name = '';
        let selectedTheme = theme;

        if (theme === 'all') {
            // ランダムの場合、30%の確率で2つのカテゴリを組み合わせる
            const shouldCombine = Math.random() < 0.3;

            if (shouldCombine) {
                // 2つの異なるカテゴリから名前を取得して組み合わせる
                const themes = ['food', 'animal', 'space', 'idiom', 'nature', 'mythology', 'humor'];
                const theme1 = themes[Math.floor(Math.random() * themes.length)];
                let theme2 = themes[Math.floor(Math.random() * themes.length)];

                // 同じテーマにならないようにする
                while (theme2 === theme1) {
                    theme2 = themes[Math.floor(Math.random() * themes.length)];
                }

                // 各テーマから名前の一部を取得
                const part1 = getNamePart(theme1);
                const part2 = getNamePart(theme2);

                name = part1 + part2;
            } else {
                // 通常の単一カテゴリ生成
                const themes = ['food', 'animal', 'space', 'idiom', 'nature', 'mythology', 'humor'];
                selectedTheme = themes[Math.floor(Math.random() * themes.length)];
            }
        }

        // 組み合わせ名がまだ生成されていない場合は通常の生成
        if (name === '') {
            if (selectedTheme === 'idiom' || selectedTheme === 'humor') {
                // 四字熟語系・ユーモア系は名前リストから選択
                const names = nameDatabase[selectedTheme].names;
                name = names[Math.floor(Math.random() * names.length)];
            } else {
                // その他のテーマは prefix + base + suffix の組み合わせ
                const data = nameDatabase[selectedTheme];
                const usePrefix = Math.random() > 0.5; // 50%の確率でプレフィックスを使用
                const useSuffix = Math.random() > 0.5; // 50%の確率でサフィックスを使用

                if (usePrefix) {
                    const prefix = data.prefixes[Math.floor(Math.random() * data.prefixes.length)];
                    name += prefix;
                }

                const base = data.bases[Math.floor(Math.random() * data.bases.length)];
                name += base;

                if (useSuffix) {
                    const suffix = data.suffixes[Math.floor(Math.random() * data.suffixes.length)];
                    name += suffix;
                }
            }
        }

        // 文字数チェック（2文字以上9文字以内）
        if (name.length >= MIN_LENGTH && name.length <= MAX_LENGTH) {
            return name;
        }
    }

    // 万が一100回試しても見つからない場合は、強制的に条件を満たす名前を返す
    const fallbackNames = ['スター', 'ムーン', 'サン', 'ウィンド', 'フレイム', 'ストーム', 'ライト', 'シャドウ'];
    return fallbackNames[Math.floor(Math.random() * fallbackNames.length)];
}

// カテゴリから名前の一部を取得するヘルパー関数
function getNamePart(theme) {
    if (theme === 'idiom' || theme === 'humor') {
        // 四字熟語系・ユーモア系の場合は名前全体から一部を切り出す
        const names = nameDatabase[theme].names;
        const fullName = names[Math.floor(Math.random() * names.length)];

        // 名前の前半または後半をランダムに取得（2-5文字）
        const isFirstHalf = Math.random() > 0.5;
        const partLength = Math.floor(Math.random() * 4) + 2; // 2-5文字

        if (isFirstHalf) {
            return fullName.substring(0, Math.min(partLength, fullName.length));
        } else {
            return fullName.substring(Math.max(0, fullName.length - partLength));
        }
    } else {
        // その他のテーマはbase要素を使用
        const data = nameDatabase[theme];
        return data.bases[Math.floor(Math.random() * data.bases.length)];
    }
}

// 履歴に追加
function addToHistory(name, theme) {
    const historyItem = {
        name: name,
        theme: themeNames[theme],
        timestamp: new Date().toLocaleString('ja-JP')
    };

    history.unshift(historyItem);

    // 最大100件まで
    if (history.length > MAX_HISTORY) {
        history.pop();
    }

    updateHistoryDisplay();
}

// 履歴表示更新
function updateHistoryDisplay() {
    historyCount.textContent = `(${history.length}/${MAX_HISTORY})`;

    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-history">まだ履歴がありません</p>';
        return;
    }

    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <span class="history-item-name">${item.name}</span>
            <span class="history-item-theme">${item.theme}</span>
        </div>
    `).join('');
}

// 生成ボタンのイベントリスナー
generateBtn.addEventListener('click', () => {
    const theme = themeSelect.value;
    const name = generateHorseName(theme);

    currentName = name;

    // 出力ボックスに表示
    outputBox.innerHTML = `<span>${name}</span>`;
    outputBox.classList.add('has-content');

    // コピーボタンを有効化
    copyBtn.disabled = false;

    // 履歴に追加
    addToHistory(name, theme);

    // ボタンアニメーション
    generateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        generateBtn.style.transform = '';
    }, 100);
});

// コピーボタンのイベントリスナー
copyBtn.addEventListener('click', async () => {
    if (!currentName) return;

    try {
        await navigator.clipboard.writeText(currentName);

        // コピー成功のフィードバック
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="copy-icon">✓</span> コピーしました！';
        copyBtn.classList.add('copied');

        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('コピーに失敗しました:', err);
        alert('コピーに失敗しました。手動でコピーしてください。');
    }
});

// Enterキーでも生成できるようにする
themeSelect.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click();
    }
});

// 初期化
updateHistoryDisplay();
