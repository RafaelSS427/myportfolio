import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Tooltip, Button } from '@nextui-org/react'
// import { SectionTitle } from '@/components'
import { useMediaQuery } from '@/hooks'
import { IItemAbout } from '@/interfaces'
import { config } from '@/config'
import { tailwindTheme } from '@/utils'

import ItemAbout from '@/components/home/ItemAbout'
import SectionTitle from '@/components/shared/SectionTitle'

export const About = () => {
    const [show, setShow] = useState<boolean>(false)
    const { t } = useTranslation('home')
    const match = useMediaQuery(parseInt(tailwindTheme.screens.sm))

    const itemsAbout: IItemAbout[] = t('about.items', { returnObjects: true })

    return (
        <div id="about" className="min-h-screen">
            <SectionTitle title={t('about.title')} titleNumber={2} />

            <div className="flex flex-col gap-5">
                {
                    itemsAbout.map((item, i) => (
                        <ItemAbout key={item.title} itemAbout={item} itemIndex={i + 1} />
                    ))
                }
            </div>

            <h3 className="text-primary text-center my-10 font-semibold">{t('about.subtitle')}</h3>


            <div className="grid gap-4 grid-cols-12">
                <div className="hidden sm:block sm:col-span-2" />
                {
                    config.skills.main.map(({ name, logo }, i) => (
                        <div key={name} className="col-span-6 sm:col-span-2">
                            <div className="grid place-content-center w-full">
                                <Tooltip content={name} color="primary">
                                    <div className={`animation-updown-${i % 2 === 0 ? 'up' : 'down'}`}>
                                        {logo}
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-center">
                <Button
                    disableRipple
                    variant="bordered"
                    color="primary"
                    className="border-none underline"
                    onPress={() => setShow(v => !v)}
                >
                    {!show ? t('ui.show.more') : t('ui.show.less')}
                </Button>
            </div>


            {
                show && (
                    <div className="grid gap-y-10 sm:gap-y-5 grid-cols-12 justify-center mt-8">
                        {
                            config.skills.secondary.map(({ name, logo }, i) => (
                                <div key={name} className="col-span-4 sm:col-span-3">
                                    <div
                                        className="grid"
                                        style={{
                                            placeContent: match ? 'center' : (i > 3 && i < 8) ? 'end' : 'center'
                                        }}
                                    >
                                        <Tooltip content={name} color="primary">
                                            <div className={`animation-updown-${i % 2 === 0 ? 'up' : 'down'}`}>
                                                {logo}
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}