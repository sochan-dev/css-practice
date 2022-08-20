import type { FC } from 'react';
import { Checkbox } from '../atoms/Checkbox';
import Styles from '/src/exercise3/organisms/styles/privacyBox.module.scss';

export const PrivacyBox: FC = () => (
  <div className={Styles.privacyBox}>
    <p className={Styles.privacyBox__msg}>
      「<a href="#privacy">プライバシーポリシー</a>」をご確認いただき、個⼈
      情報の取扱いについて同意いただける場合は 「同意する」を選択してください。
    </p>
    <Checkbox name="agree" id="agree" value="1" label="個人情報保護方針に同意する" />
  </div>
);
