function correct(string)
{
    var changed = string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
    return changed;
}

console.log(correct('L0ND0N and 51NGAPORE'));
