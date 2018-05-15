module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    company: {
      info: [
        { header: '会社名', detail: '株式会社6VOX (6VOX Co.,Ltd.)' },
        { header: '事業内容', detail: 'システム／ソフトウェア開発' },
        { header: '創業', detail: '2013 年' },
        { header: '社員数', detail: 'エンジニア 5 名' },
        { header: '取引銀行', detail: '三菱東京UFJ銀行 他...' },
        { header: 'MAIL', detail: 'info@6vox.com' },
      ],
      branchOffices: [
        {
          name: '大阪本社',
          members: '4名',
          address: '〒564-0043 大阪府吹田市南吹田2丁目16番5号',
          mapUrl:
            'https://www.google.co.jp/maps/place/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE6VOX/@34.7473511,135.5096207,15z/data=!4m5!3m4!1s0x0:0xe0a19549acf9fe8f!8m2!3d34.7473511!4d135.5096207',
        },
        {
          name: '京都事務所',
          members: '1名',
          address:
            '〒606-0042 京都市左京区上高野鷺町26-3 北山テナント 1F B区画',
          mapUrl:
            'https://www.google.co.jp/maps/place/Hanare+Iwakura+%E3%82%B3%E3%83%AF%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9/@35.0616672,135.7871743,15z/data=!4m2!3m1!1s0x0:0xd7a8066699134b9f?sa=X&ved=0ahUKEwjW5ImE09XZAhXDy7wKHeekDqYQ_BIIdDAO',
        },
      ],
    },
    aboutPageContents: [
      '大阪、京都に事務所をかまえるシステム／ソフトウェア開発会社です。',
      '2013年7月、フリーランス・エンジニアをしていた代表が「ひとりでできないことをしたい」と思い立ち上げた会社です。現在は主に Ruby On Rails のシステム開発を行っています。',
      '🍎💙🍈🍆🍋🍊',
    ],
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-react-next'],
}
