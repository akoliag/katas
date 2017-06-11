# https://www.codewars.com/kata/dollars-and-cents/train/ruby


def format_money(amount)
  formatted_amount = sprintf("%.2f", amount.to_s)
  return "$#{formatted_amount}"
end
