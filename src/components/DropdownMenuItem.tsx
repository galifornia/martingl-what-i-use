import { Menu } from '@headlessui/react'
import React, { ReactNode } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  href: string
  children: ReactNode
}

export default function DropdownMenuItem({ href, children }: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          className={classNames(
            active ? 'bg-orange-200 dark:bg-zinc-700' : '',
            'block px-4 py-2 text-sm',
          )}
          href={href}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}
