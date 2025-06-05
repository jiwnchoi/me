import { useRouter } from 'next/router'
import { Select } from 'nextra/components'

export function LanguageSwitcher() {
  const router = useRouter()
  const { locale, pathname, asPath, query } = router

  const handleChange = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <Select
      title="Language"
      placeholder="Language"
      value={locale}
      onChange={(e) => handleChange(e.target.value)}
      options={[
        { value: 'en', label: 'English' },
        { value: 'ko', label: '한국어' }
      ]}
    />
  )
}
