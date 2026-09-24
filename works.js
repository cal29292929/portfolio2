// 作品を追加するには、この配列に1件足すだけでOKです。
// title: 作品名 / tool: 使用ツール / desc: 説明文
// url: リンク先(なければ '#') / color: 動画・画像が無いときの背景色
// img: サムネイル画像パス(なければ空文字 '') / video: 自動再生する動画パス(なければ空文字 '')
const WORKS = [
  {
    title: 'ADV風ゲーム — イベント企画',
    tool: 'Kling 2.0',
    desc: 'AI生成ビジュアルによるノベルゲーム風イベント企画動画。',
    color: '#22303A',
    url: 'https://cal29292929.github.io/adv-event-game/',
    img: 'assets/adv-game-thumb.webp',
    video: ''
  },
  {
    title: '食リポ',
    tool: 'Runway',
    desc: 'AI生成による食リポ映像。',
    color: '#2A2A3A',
    url: '#',
    img: '',
    video: 'assets/shokurepo.mp4'
  },
  {
    title: 'メイドバトル Vol.1',
    tool: 'Kling',
    desc: 'AI生成による「メイドバトル」映像シリーズ。',
    color: '#333026',
    url: '#',
    img: '',
    video: 'assets/maidbattle-vol1.mp4',
    poster: 'assets/maidbattle-vol1-poster.webp'
  },
  {
    title: 'メイドバトル Vol.2',
    tool: 'Kling',
    desc: 'AI生成による「メイドバトル」映像シリーズ。',
    color: '#2A3330',
    url: '#',
    img: '',
    video: 'assets/maidbattle-vol2.mp4',
    poster: 'assets/maidbattle-vol2-poster.webp'
  },
  {
    title: 'AINina',
    tool: 'Kling',
    desc: 'AIアニメMV「AINina」。',
    color: '#332A33',
    url: 'https://youtube.com/shorts/bthPFLLc4Fs',
    img: 'assets/ainina-thumb.jpg',
    video: ''
  }
];
