import type { FC } from 'react';
import Styles from '/src/exercise3/organisms/styles/contactForm.module.scss';
import { Button } from '../atoms/Button';
import { Radio } from '../atoms/Radio';
import { RequiredLabel } from '../atoms/RequiredLabel';
import { SubHeading } from '../atoms/SubHeading';
import { Input } from '../molecules/Input';
import { Select } from '../molecules/Select';
import { TextArea } from '../molecules/TextArea';
import { PrivacyBox } from './PrivacyBox';

/*
formグループにもラベルを付けようとするとhtmlの構造が複雑になってコンポーネント分割難しい
  分からない。
*/

interface Props {
  isError: boolean;
}

const optionList = [
  {
    id: 0,
    attribute: { value: '0' },
    label: '選択して下さい',
  },
  {
    id: 1,
    attribute: { value: '1' },
    label: '弊社事業について',
  },
  {
    id: 2,
    attribute: { value: '2' },
    label: '弊社商品について',
  },
  {
    id: 3,
    attribute: { value: '3' },
    label: '採用について',
  },
  {
    id: 4,
    attribute: { value: '4' },
    label: 'メディア取材について',
  },
  {
    id: 5,
    attribute: { value: '5' },
    label: 'その他のお問合わせ',
  },
];

export const ContactForm: FC<Props> = (props) => {
  const { isError } = props;

  return (
    <div className={Styles.contactForm}>
      <form action="/" method="POST">
        <SubHeading txt="お問い合わせフォーム" />
        <table>
          <tbody>
            <tr>
              <th>
                <div className={Styles.contactForm__th}>
                  <label htmlFor="type">お問合わせ種類</label>
                  <RequiredLabel />
                </div>
              </th>
              <td>
                <Select
                  attribute={{ id: 'type', name: 'type', required: true, defaultValue: '0' }}
                  optionList={optionList}
                  isError={isError}
                  errorMsg="お問合わせ種類を選択してください。"
                />
              </td>
            </tr>
            <tr>
              <th>
                <div className={Styles.contactForm__th}>
                  <label htmlFor="contents">お問合わせ内容</label>
                  <RequiredLabel />
                </div>
              </th>
              <td>
                <TextArea
                  attribute={{
                    id: 'contents',
                    rows: 9,
                    name: 'contents',
                    required: true,
                    placeholder: 'お問合わせ内容をご記入ください',
                  }}
                  isError={isError}
                  errorMsg="お問合わせ内容を入力してください。"
                />
              </td>
            </tr>
            <tr>
              <th>
                <div className={Styles.contactForm__th} id="nameGroup">
                  <span>お名前</span>
                  <RequiredLabel />
                </div>
              </th>
              <td>
                <div className={Styles.contactForm__nameGroup} aria-labelledby="nameGroup">
                  <div>
                    <label htmlFor="lastName">姓</label>
                    <Input
                      attribute={{
                        type: 'text',
                        id: 'lastName',
                        name: 'lastName',
                        required: true,
                        placeholder: 'ヤマダ',
                        pattern: '^[ァ-ンヴー]+$',
                      }}
                      isError={isError}
                      errorMsg="フリガナの姓を入力してください"
                      annotation="全角カタカナでご記入ください"
                    />
                  </div>
                  <div>
                    <label htmlFor="firstName">名</label>
                    <Input
                      attribute={{
                        type: 'text',
                        id: 'firstName',
                        name: 'firstName',
                        required: true,
                        placeholder: 'タロウ',
                        pattern: '^[ァ-ンヴー]+$',
                      }}
                      isError={isError}
                      errorMsg="フリガナの名を入力してください"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <div className={Styles.contactForm__th}>
                  <label htmlFor="mailAddress">メールアドレス</label>
                  <RequiredLabel />
                </div>
              </th>
              <td>
                <Input
                  attribute={{
                    type: 'email',
                    id: 'mailAddress',
                    name: 'mailAddress',
                    required: true,
                    placeholder: 'yamada@sample.co.jp',
                  }}
                  isError={isError}
                  errorMsg="正しい形式のメールアドレスを入力してください"
                />
              </td>
            </tr>
            <tr>
              <th>
                <div className={Styles.contactForm__th}>
                  <label htmlFor="tel">電話番号</label>
                  <RequiredLabel />
                </div>
              </th>
              <td>
                <Input
                  attribute={{
                    type: 'tel',
                    id: 'tel',
                    name: 'tel',
                    required: true,
                    placeholder: '0901234567',
                    pattern: '^[0-9]+$',
                  }}
                  isError={isError}
                  errorMsg="電話番号を入力してください"
                  annotation="半角数字でご記入ください。ハイフン(-)は入力しないでください。"
                />
              </td>
            </tr>
            <tr>
              <th>
                <div className={Styles.contactForm__th} id="attributeGroup">
                  <span>法人/個人</span>
                  <RequiredLabel />
                </div>
              </th>
              <td>
                <div
                  className={Styles.contactForm__attributeGroup}
                  aria-labelledby="attributeGroup"
                >
                  <div>
                    <Radio label="法人" name="attributeGroup" value={1} id="corporation" />
                  </div>
                  <div>
                    <Radio label="個人" name="attributeGroup" value={2} id="individual" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <div className={Styles.contactForm__th}>
                  <label htmlFor="company">会社名</label>
                  <RequiredLabel />
                </div>
              </th>
              <td>
                <Input
                  attribute={{
                    type: 'text',
                    id: 'company',
                    name: 'company',
                    placeholder: 'サンプル株式会社',
                  }}
                  isError={isError}
                  errorMsg="法人のお客様は会社名を入力してください"
                  annotation="法人のお客様の場合は必ず入力してください"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={Styles.contactForm__privacy}>
          <PrivacyBox />
        </div>
        <div className={Styles.contactForm__button}>
          <Button label="入力内容を確認する" />
        </div>
      </form>
    </div>
  );
};
