//internationlaization helpers are built into javascript
export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
	return new Intl.DateTimeFormat(undefined, options).format(date); //undefined will use current locale
}
