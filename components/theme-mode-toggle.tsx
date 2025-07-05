'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function ThemeModeToggle() {
  const { setTheme } = useTheme()

  const handleThemeChange = (theme: string, e: React.MouseEvent<HTMLDivElement>) => {
    setTheme(theme)
    e.currentTarget.blur()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">切换主题</span>
        </Button>
      </DropdownMenuTrigger>
      {/* 防止点击后再次聚焦到按钮，影响键盘空格事件 */}
      <DropdownMenuContent align="end" onCloseAutoFocus={(e) => e.preventDefault()}>
        <DropdownMenuItem onClick={(e) => handleThemeChange('light', e)}>亮色</DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => handleThemeChange('dark', e)}>暗色</DropdownMenuItem>
        <DropdownMenuItem onClick={(e) => handleThemeChange('system', e)}>跟随系统</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
