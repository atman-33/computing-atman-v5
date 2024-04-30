# ShadcnのCommandItemがアクティブにならない

## 結論

CommandItemの要素クラスから`data-[disabled]:pointer-events-none data-[disabled]:opacity-50`を削除する。

## 参考URL

[[Bug]: Command/Combobox TypeError and Unclickable/Disabled items, cmdk breaking change](https://github.com/shadcn-ui/ui/issues/2944)
