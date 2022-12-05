import { validateForms } from "./validate-forms.js";

const rulesCallback = [
	{
		ruleSelector: ".input-name",
		rules: [
			{
				rule: "required",
				value: true,
				errorMessage: "Заполните имя!",
			},
		],
	},
	{
		ruleSelector: ".input-email",
		rules: [
			{
				rule: "required",
				value: true,
				errorMessage: "Заполните Email!",
			},
			{
				rule: "email",
				value: true,
				errorMessage: "Введите корректный Email!",
			},
		],
	},
	{
		ruleSelector: ".input-tel",
		tel: true,
		telError: "Введите корректный телефон",
		rules: [
			{
				rule: "required",
				value: true,
				errorMessage: "Заполните телефон!",
			},
		],
	},
];

validateForms(".popup__form", rulesCallback);

const priceCallback = [
	{
		ruleSelector: ".input-name",
		rules: [
			{
				rule: "required",
				value: true,
				errorMessage: "Заполните имя!",
			},
		],
	},
	{
		ruleSelector: ".input-email",
		rules: [
			{
				rule: "required",
				value: true,
				errorMessage: "Заполните Email!",
			},
			{
				rule: "email",
				value: true,
				errorMessage: "Введите корректный Email!",
			},
		],
	},
];

validateForms(".price__form", priceCallback);
