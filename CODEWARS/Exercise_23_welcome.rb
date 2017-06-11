# https://www.codewars.com/kata/welcome/train/ruby

# Option 1
def greet(language)
greeting = {
'english'=>'Welcome',
'czech'=>'Vitejte',
'danish'=>'Velkomst',
'dutch'=>'Welkom',
'estonian'=>'Tere tulemast',
'finnish'=>'Tervetuloa',
'flemish'=>'Welgekomen',
'french'=>'Bienvenue',
'german'=>'Willkommen',
'irish'=>'Failte',
'italian'=>'Benvenuto',
'latvian'=>'Gaidits',
'lithuanian'=>'Laukiamas',
'polish'=>'Witamy',
'spanish'=>'Bienvenido',
'swedish'=>'Valkommen',
'welsh'=>'Croeso'
}
 greeting.has_key?(language) ? greeting[language] : "Welcome"
end

# Option 2
def greet_2(language)
  languages = Hash.new
  languages['english'] = 'Welcome'
  languages['czech'] = 'Vitejte'
  languages['danish'] = 'Velkomst'
  languages['dutch'] = 'Welkom'
  languages['estonian'] = 'Tere tulemast'
  languages['finnish'] = 'Tervetuloa'
  languages['flemish'] = 'Welgekomen'
  languages['french'] = 'Bienvenue'
  languages['german'] = 'Willkommen'
  languages['irish'] = 'Failte'
  languages['italian'] = 'Benvenuto'
  languages['latvian'] = 'Gaidits'
  languages['lithuanian'] = 'Laukiamas'
  languages['polish'] = 'Witamy'
  languages['spanish'] = 'Bienvenido'
  languages['swedish'] = 'Valkommen'
  languages['welsh'] = 'Croeso'

  if languages.key?(language)
    return languages[language]
  else
    return languages['english']
  end
end
