function DNAStrand(dna){
    //your code here
    let completedStrand = ''
    for(let i =0; i < dna.length; i++){
        let currentSymbol = dna[i];
    
        if( currentSymbol === 'A'){
            completedStrand += 'T';
        }else if( currentSymbol=== 'T'){
            completedStrand +='A';
        }else if( currentSymbol === 'C'){
            completedStrand += 'G';
        }else if (currentSymbol === 'G'){
            completedStrand += 'C';
        }
    }

    return completedStrand;
    

    
}
