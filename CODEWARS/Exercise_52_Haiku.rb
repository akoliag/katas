# https://www.codewars.com/kata/haiku-wizard

def haiku_wizard(arr)
  words = [
["like", "a", "tweet", "what", "for", "world", "whale", "one", "last", "sun"],
["ocean", "beauty", "tweet", "monster", "yellow", "return", "despair", "flower", "return", "contrast"],
["romantic", "curious", "banana", "jealousy", "tactlessly", "remorseful", "follower", "elephant", "however", "instagram"],
["salmonella", "consequently", "irregular", "intelligence", "vegetable", "ordinary", "alternative", "watermelon", "controversial", "marijuana"],
["lackadaisical", "serendipity", "colonoscopy", "dramatically", "parsimonius", "imagination", "electricity", "diabolical", "deforestation", "abomination"],
["extraterrestrial", "onomatopoeia", "responsibility", "revolutionary", "generalisation", "enthusiastically", "biodiversity", "veterinarian", "characteristically", "indefatigable"],
["oversimplification", "individuality", "decriminalisation", "compartmentalisation", "anaesthesiologist", "industrialisation", "buckminsterfullerene", "irresponsibility", "autobiographical", "utilitarianism"]]
   result = []
   arr.each do |subarray|
   string = []
      subarray.each do |value_subarray|
        row = value_subarray.to_s.split("")
        syllab_num = row[0].to_i-1
        syllab_index = row[1].to_i
        string << words[syllab_num][syllab_index]
      end
    result << string.join(" ")
   end
  return result.join("\n")
end
