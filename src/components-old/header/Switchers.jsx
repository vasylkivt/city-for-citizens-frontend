import { useTranslations } from 'next-intl';
import IconCheckbox from '../UI/icons/IconCheckbox';
import DropdownSwitcher from './DropdownSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { AdminMenuNav } from '../Admin/AdminMenu/AdminMenuNav';

const buttonStyle =
  'w-full  desktop:w-auto cursor-pointer flex justify-between p-2.5 desktop:p-0 desktop:justify-center desktop:h-5 max-desktop:border-t border-gray/80 max-desktop:dark:border-gray/10 max-desktop:text-gray/50  leading-normal';
const iconCheckBoxStyle = `stroke-gray/50  transition-all`;

const Switchers = () => {
  const t = useTranslations('Header.Switchers');

  return (
    <div className="flex w-full flex-col justify-between gap-[30px] pb-[80px] desktop:pb-0">
      <div
        className="mt-[195px] flex w-full flex-col items-center max-desktop:gap-4 max-desktop:px-4 tablet:flex-row tablet:items-start tablet:justify-center
          desktop:mt-0 landscape:flex landscape:items-start landscape:justify-center  landscape:max-tablet:flex-row landscape:desktop:mt-0 landscape:desktop:gap-0"
      >
        <DropdownSwitcher
          content={t('titleTheme')}
          options={
            <ThemeSwitcher
              buttonStyle={buttonStyle}
              icon={<IconCheckbox className={`${iconCheckBoxStyle}`} />}
            />
          }
        />
        <DropdownSwitcher
          content={t('titleLang')}
          options={
            <LanguageSwitcher
              buttonStyle={buttonStyle}
              icon={<IconCheckbox className={`${iconCheckBoxStyle}`} />}
            />
          }
        />
      </div>
      <div className="desktop:hidden">
        <AdminMenuNav />
      </div>
    </div>
  );
};

export default Switchers;
