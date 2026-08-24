import { ASSESSMENT_TYPES } from '../../assessmentTypes';
import businessMessageImage from '../../../assets/assessments/japnese/business_message.png';
import meetingScheduleImage from '../../../assets/assessments/japnese/meeting_schedule.png';
import officeDirectoryImage from '../../../assets/assessments/japnese/office_directory.png';

export const japaneseData = {
  id: ASSESSMENT_TYPES.japanese,
  title: 'Japanese Professional Language Proficiency Certification',
  shortTitle: 'Japanese',
  category: 'Language Skills',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Interactive professional language assessment covering workplace comprehension, business communication, schedules, charts, tables, grammar in context, professional tone, negotiation, and customer communication.',
  instructions:
    '20 scenario-based questions, 50 minutes, 100 marks. Questions include message/email exhibits, office visuals, schedules, tables, charts, and Mermaid conversation flows. Read each scenario carefully and choose the most accurate and professional answer. No negative marking.',
  questions: [
    {
      id: 'ja-01',
      type: 'mcq',
      title: 'ビジネスメッセージ',
      difficulty: 'easy',
      points: 5,
      prompt: `メールを読んでください。

{{image}}

山田さんの主な目的は何ですか。`,
      image: {
        src: businessMessageImage,
        alt: '会議時間変更をお願いするビジネスメール'
      },
      options: [
        '会議を完全に中止すること。',
        '会議時間を丁寧に変更し、確認をお願いすること。',
        '請求書を送ること。',
        '相手に苦情を言うこと。'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. 本文は14:00から15:30への変更と確認を依頼しています。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-02',
      type: 'mcq',
      title: 'スケジュール理解',
      difficulty: 'easy',
      points: 5,
      prompt: `予定表を見てください。

{{image}}

11:15から12:30までだけ空いています。最初から最後まで参加できる予定はどれですか。`,
      image: {
        src: meetingScheduleImage,
        alt: '業務スケジュール'
      },
      options: [
        '仕入先との電話。',
        '顧客レビュー。',
        '予算確認。',
        'マーケティング発表。'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. 発表は11:30から12:15までです。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-03',
      type: 'mcq',
      title: '丁寧な依頼',
      difficulty: 'easy',
      points: 5,
      prompt: `初めて連絡する重要なお客様に送る文として最も適切なのはどれですか。`,
      options: [
        '木曜日の10時でよろしいか、ご確認いただけますでしょうか。',
        '木曜10時で確認してください。',
        '今すぐ返事してください。',
        '木曜10時。返事。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. 「いただけますでしょうか」は丁寧な依頼表現です。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-04',
      type: 'mcq',
      title: '条件表現',
      difficulty: 'easy',
      points: 5,
      prompt: `文を完成させてください。

「今日確認が取れれば、明日注文を___。」`,
      options: [
        '確定しました',
        '確定していました',
        '確定します',
        '確定したでしょう'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. 条件成立後の自然な未来の行動として「確定します」が適切です。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-05',
      type: 'mcq',
      title: '助詞・代名詞',
      difficulty: 'easy',
      points: 5,
      prompt: `「田中さんに契約書を送りました。」

自然な言い換えはどれですか。`,
      options: [
        '昨日、田中さんにそれを送りました。',
        '昨日、それに田中さんを送りました。',
        '昨日、田中さんをそれに送りました。',
        '昨日、それが田中さんへ送りました。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. 受け手には「に」、物には「それを」を使います。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-06',
      type: 'mcq',
      title: 'グラフ読解',
      difficulty: 'medium',
      points: 5,
      prompt: `グラフを見てください。

{{chart}}

最も適切な説明はどれですか。`,
      chart: {
        type: 'line',
        title: '週別のお客様問い合わせ',
        xAxis: ['1週','2週','3週','4週','5週'],
        series: [{ name: '件数', data: [42,47,45,58,66] }]
      },
      options: [
        '毎週減っている。',
        '完全に一定である。',
        '第3週に少し下がったものの、全体として問い合わせ数は増えている。',
        '第2週以降、大幅に落ち続けている。'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. 42から66へ全体として増えています。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-07',
      type: 'mcq',
      title: '電話会話',
      difficulty: 'medium',
      points: 5,
      prompt: `会話の流れを読んでください。

{{diagram}}

空欄に最も自然な文はどれですか。`,
      diagram: `flowchart LR
  A["お客様: 佐藤さんをお願いします。"] --> B["受付: 15時まで会議中です。"]
  B --> C["お客様: ______"]
  C --> D["受付: かしこまりました。お伝えします。"]`,
      options: [
        'では切ります。',
        '個人の電話番号を教えてください。',
        '今すぐ会議から出してください。',
        '折り返しお電話いただけるよう、お伝えいただけますか。'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. 受付の「お伝えします」と最も自然につながる依頼です。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-08',
      type: 'mcq',
      title: '顧客対応',
      difficulty: 'medium',
      points: 5,
      prompt: `お客様から「注文が5日遅れていて、連絡もありません」と届きました。

最も適切な返信はどれですか。`,
      options: [
        'もう少し待ってください。',
        '遅延についてお詫び申し上げます。現在配送状況を確認しており、本日16時までに更新をご連絡します。',
        '配送会社の責任です。',
        '住所を間違えたのではありませんか。'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. 謝罪、確認行動、期限が含まれています。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-09',
      type: 'mcq',
      title: 'オフィス語彙',
      difficulty: 'medium',
      points: 5,
      prompt: `案内図を見てください。

{{image}}

新入社員が入社書類を提出する場所はどこですか。`,
      image: {
        src: officeDirectoryImage,
        alt: 'オフィス案内'
      },
      options: [
        '受付。',
        '経理。',
        '人事。',
        '会議室。'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. 入社関連書類は通常、人事が担当します。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-10',
      type: 'mcq',
      title: '表の読解',
      difficulty: 'medium',
      points: 5,
      prompt: `表を見てください。

{{table}}

約束した納期と実際の納期が一致しているのはどれですか。`,
      table: {
        headers: ['仕入先','予定','実績'],
        rows: [['A','5日','7日'],['B','8日','8日'],['C','4日','6日'],['D','10日','13日']]
      },
      options: [
        '仕入先B。',
        '仕入先A。',
        '仕入先C。',
        '仕入先D。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. Bは予定も実績も8日です。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-11',
      type: 'mcq',
      title: '進行中の過去',
      difficulty: 'medium',
      points: 5,
      prompt: `自然な文を選んでください。

「部長から電話があったとき、私は報告書を___。」`,
      options: [
        '作成しますでした',
        '作成していました',
        '作成した明日',
        '作成しているでしょう'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. 過去の時点で進行中だった動作なので「作成していました」が自然です。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-12',
      type: 'mcq',
      title: '丁寧な書き換え',
      difficulty: 'medium',
      points: 5,
      prompt: `同僚の文：「今日、数字を送って。」

社外の役員向けに最も適切な表現はどれですか。`,
      options: [
        '今日、数字を送ってください。',
        '今すぐ数字が欲しいです。',
        '数字。今日。',
        '恐れ入りますが、本日中に数値をご送付いただけますでしょうか。'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. 依頼を丁寧にし、期限も明確にしています。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-13',
      type: 'mcq',
      title: '業績データ',
      difficulty: 'hard',
      points: 5,
      prompt: `グラフを見てください。

{{chart}}

最も適切な結論はどれですか。`,
      chart: {
        type: 'bar',
        title: '顧客満足度 (%)',
        categories: ['受付','速度','明確さ','解決'],
        series: [{ name: 'スコア', data: [92,74,88,69] }]
      },
      options: [
        '受付が最も低い。',
        '明確さが70%未満である。',
        'すべて85%以上である。',
        '問題解決が最も改善すべき項目である。'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. 解決の69%が最低値です。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-14',
      type: 'mcq',
      title: '接続表現',
      difficulty: 'hard',
      points: 5,
      prompt: `文を完成させてください。

「売上は12%増加しました。___、コスト上昇により利益率は低下しました。」`,
      options: [
        'したがって',
        'しかし',
        '例えば',
        '同様に'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. 「しかし」は対比を表します。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-15',
      type: 'mcq',
      title: '交渉表現',
      difficulty: 'hard',
      points: 5,
      prompt: `押しつけずに代替案を提案したい場合、最も適切なのはどれですか。`,
      options: [
        '2回の納品を受け入れてください。',
        '納品方法を変更します。',
        'もしよろしければ、納品を2回に分ける方法も検討できます。',
        '2回に分けてください。'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. 「検討できます」は柔らかい提案表現です。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-16',
      type: 'mcq',
      title: '会議理解',
      difficulty: 'hard',
      points: 5,
      prompt: `会話を読んでください。

{{diagram}}

最終的な決定は何ですか。`,
      diagram: `sequenceDiagram
  participant C as 顧客
  participant S as 営業
  participant F as 経理
  C->>S: 8%の値引きを希望します
  S->>F: 8%は承認できますか
  F-->>S: 追加承認なしでは最大5%
  S-->>C: 5%ならすぐ提示できます
  C-->>S: 了解しました`,
      options: [
        '営業が5%を提示し、顧客が受け入れた。',
        '経理が8%を承認した。',
        '顧客がすべての割引を拒否した。',
        '交渉を中止した。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. 最後に顧客が5%を受け入れています。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-17',
      type: 'mcq',
      title: '比較表現',
      difficulty: 'hard',
      points: 5,
      prompt: `表を見てください。

{{table}}

正しい文はどれですか。`,
      table: {
        headers: ['チーム','平均回答時間'],
        rows: [['パリ','2時間10分'],['リヨン','3時間05分'],['ボルドー','1時間45分'],['リール','2時間35分']]
      },
      options: [
        'リヨンはボルドーより速い。',
        'ボルドーの回答が最も速い。',
        'パリが最も遅い。',
        'リールはボルドーより遅くない。'
      ],
      correctIndex: 1,
      explanation:
        'Correct: B. ボルドーが最短の1時間45分です。 Why not A/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-18',
      type: 'mcq',
      title: '指示理解',
      difficulty: 'hard',
      points: 5,
      prompt: `上司の指示：

「月次の数字は正しいですが、顧客に送る前に印の付いた2つの差異を確認してください。」

最初にすべきことは何ですか。`,
      options: [
        'すぐ顧客に送る。',
        '差異を削除する。',
        '報告書を全部書き直す。',
        '2つの差異を確認する。'
      ],
      correctIndex: 3,
      explanation:
        'Correct: D. 送付前の確認が明確に指示されています。 Why not A/B/C: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-19',
      type: 'mcq',
      title: 'プロフェッショナルな表現',
      difficulty: 'hard',
      points: 5,
      prompt: `遅延を最も適切に伝える文はどれですか。`,
      options: [
        '遅延をお詫び申し上げます。新しい完了予定は17時で、15時に進捗をご連絡します。',
        '遅れていますが大丈夫です。',
        '忘れていました。すみません。',
        'まだ更新はありません。'
      ],
      correctIndex: 0,
      explanation:
        'Correct: A. 謝罪、新しい予定、途中報告の時刻が明確です。 Why not B/C/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    },
    {
      id: 'ja-20',
      type: 'mcq',
      title: '統合コミュニケーション',
      difficulty: 'hard',
      points: 5,
      prompt: `流れを見てください。

{{diagram}}

最も適切な返信はどれですか。`,
      diagram: `flowchart TB
  I["問題を把握"] --> A["問題を認める"]
  A --> E["責任転嫁せず簡潔に説明"]
  E --> P["対応と期限を示す"]
  P --> F["フォローアップを約束"]`,
      options: [
        'メッセージを受け取りました。',
        '仕入先の責任です。',
        'この度は申し訳ございません。原因を特定し、対応を開始しております。本日16時までに解決をご報告します。',
        'お待ちいただきありがとうございます。'
      ],
      correctIndex: 2,
      explanation:
        'Correct: C. 謝罪・説明・対応・期限・フォローアップが含まれています。 Why not A/B/D: the other choices are grammatically weaker, less professional, or inconsistent with the exhibit/context.'
    }
  ],
};
