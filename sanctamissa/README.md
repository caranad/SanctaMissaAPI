# Sancta Missa API

A web API built using Express and Node which extracts data about the propers of the Roman Catholic Mass according to the 1962 Missal instituted by Pope John XXIII (and used by groups such as the FSSP, SSPX, ICKSP, and other Tridentine Mass communities in union with Rome). Currently does not work for Good Friday (though, technically, that's fine too since no Mass occurs on that day).

The propers of the Roman Catholic liturgy are a set of texts that change depending on the day, to reflect a particular event in the liturgical calendar (such as a feast commemorating an event in the life of Jesus Christ, or that of a saint).

Data was scraped from https://divinumofficium.com/cgi-bin/missa/missa.pl and outputted in JSON format.